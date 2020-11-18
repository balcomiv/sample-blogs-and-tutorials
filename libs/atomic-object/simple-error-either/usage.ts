import * as Result from './result';

type Thing = {
  name: string;
};

function doIt(): Result.Type<Thing> {
  if (true) {
    return { name: 'Todd' };
  } else {
    return new Error('boom');
  }
}

const errorOrSuccess = doIt();

if (Result.isError(errorOrSuccess)) {
  // now we can know that we have an error
  console.log(errorOrSuccess.message);
} else {
  console.log(errorOrSuccess.name);
}
