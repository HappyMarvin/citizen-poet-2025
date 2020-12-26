export default class chatForm {
  constructor(formSelector, SubmitForm, resetForm) {
    this._form = document.querySelector(formSelector);
    this._input = this._form.querySelector('.enter__text-input');
    this._buttonReset = this._form.querySelector('.enter__reset');
    this._SubmitForm = SubmitForm;
    this._resetForm = resetForm;
    this._submitButton = this._form.querySelector('.enter__submit');
  }

  _clear () {
    this._input.value = '';
  }

  _addEventListeners() {
    this._form.addEventListener('submit',(evt) => {
      evt.preventDefault();
      if (!this._input.value) return
      this._SubmitForm();
      this._clear();
      this._submitButton.disabled = true;
    })

    this._buttonReset.addEventListener('click', () => {
      this._clear();
      this._resetForm();
      this._submitButton.disabled = false;
    })
  }

  createForm() {
    this._addEventListeners();
    return this._form;
  }
}