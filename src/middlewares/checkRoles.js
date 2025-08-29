import createHttpError from 'http-errors';
import { ContactsCollection } from '../db/models/contact.js';

export const checkContactOwner = async (req, res, next) => {
  const { user } = req;

  if (!user) {
    return next(createHttpError(401, 'Unauthorized'));
  }

  const { contactId } = req.params;

  if (!contactId) {
    return next();
  }

  try {
    const contact = await ContactsCollection.findOne({
      _id: contactId,
      userId: user._id,
    });

    if (!contact) {
      return next(createHttpError(403, 'Access denied. Not your contact.'));
    }

    next();
  } catch (err) {
    next(createHttpError(400, 'Invalid contact ID'));
  }
};
