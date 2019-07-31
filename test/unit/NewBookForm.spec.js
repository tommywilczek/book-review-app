import React from 'react';
import { mount } from 'enzyme';
import NewBookForm from '../../src/NewBookForm';

describe('NewBookForm', () => {
  describe('clicking the save button', () => {
    it('calls onSave handler', () => {
      const bookName = 'A Tale of Two Cities';

      const saveHandler = jest.fn();

      const newBookFormComponent = mount(<NewBookForm onSave={saveHandler} />);

      newBookFormComponent
        .find('[data-test="newBookTitleField"]').find('input')
        .simulate('change', { target: { value: bookName } }); // simulating the 'event.target.value'

      newBookFormComponent
        .find('button[data-test="saveBookBtn"]')
        .simulate('click');

      expect(saveHandler).toHaveBeenCalledWith(bookName);
    });
  });
});
