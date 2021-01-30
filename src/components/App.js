import { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import Form from './Form/Form';
import Search from './Search/Search';
import Section from './Section/Section';
import ContactList from './ContactList/ContactList';
import { setFilter } from '../redux/phonebook/phonebook-actions';
import {
  fetchContact,
  addContact,
  deleteContact,
} from '../redux/phonebook/phonebook-operations';
import { getContacts, getFilter } from '../redux/phonebook/phonebook-selectors';

const App = ({
  contacts,
  filter,
  addContact,
  setFilter,
  deleteContact,
  fetchContact,
}) => {
  useEffect(() => {
    fetchContact();
  }, []);

  const onAddContact = newContact => {
    const existedContact = contacts.find(
      contact => contact.name === newContact.name,
    );
    if (existedContact) {
      alert('Такой контакт уже есть!');
      return;
    }
    addContact(newContact);
  };

  const getFilteredContacts = () =>
    contacts.filter(contact => {
      return contact.name
        .toLocaleLowerCase()
        .includes(filter.toLocaleLowerCase());
    });

  const filteredContacts = useMemo(() => getFilteredContacts(), [
    contacts,
    filter,
  ]);
  return (
    <div>
      <Section title="Phonebook">
        <Form onSubmit={onAddContact} />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 && (
          <>
            <Search onChange={setFilter} filter={filter} />
            {filteredContacts.length > 0 ? (
              <ContactList
                contacts={filteredContacts}
                onDelete={deleteContact}
              />
            ) : (
              <span>Contacts is not found</span>
            )}
          </>
        )}
        {!contacts.length && <span>No contacts yet. Add contacts</span>}
      </Section>
    </div>
  );
};

const mapStateToProps = state => ({
  contacts: getContacts(state),
  filter: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContact: () => dispatch(fetchContact()),
  addContact: newContact => dispatch(addContact(newContact)),
  setFilter: filter => dispatch(setFilter(filter)),
  deleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
