import { createContact, updateContact } from "../contacts";
import { redirect } from "react-router-dom";
export async function createContactAction() {
  const contact = await createContact();
  return { contact };
}

// edit contact action
export async function editContactAction({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}
