export function signInRequest(email) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email },
  };
}

export function signInSucess(student) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: student,
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
