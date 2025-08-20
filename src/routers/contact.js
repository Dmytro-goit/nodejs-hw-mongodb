import { Router } from 'express';
import { getaAllContacts, getContactById } from '../services/contacts';
import { ctrlWrapper } from '../utils/ctrlWrapper';
import {
  createContactController,
  getContactByIdController,
  getContactsController,
  deleteContactController,
  upsertContactController,
  patchContactController,
} from '../controllers/contact';

const router = Router();

router.get('/contacts', getContactsController);

router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));

router.post('/contacts', ctrlWrapper(createContactController));

router.delete('/contacts/:contactId', ctrlWrapper(deleteContactController));

router.put('/contacts/:contactId', ctrlWrapper(upsertContactController));

router.patch('/contacts/:contactId', ctrlWrapper(patchContactController));

export default router;
