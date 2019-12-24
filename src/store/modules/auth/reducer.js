import produce from 'immer';

const INITIAL_STATE = {
  name: '',
  id: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS':
        draft.id = action.payload.id;
        draft.name = action.payload.nome;
        draft.signed = true;
        draft.loading = false;
        break;

      case '@auth/SIGN_IN_REQUEST':
        draft.loading = true;
        break;

      case '@auth/SIGN_IN_FAILURE':
        draft.loading = false;
        break;

      default:
    }
  });
}