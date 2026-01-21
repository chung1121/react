import { produce } from 'immer';

const state = {
  name: 'tom',
  hobbies: ['tennis', 'soccer'],
};

// const newState = state;
// newState.name = 'john';
const newState = produce(state, (draft) => {
  draft.name = 'john';
  draft.hobbies[0] = 'baseball';

  console.log(draft);
  return state;
});

console.log(state === newState);
