type Success<T> = {
  Data: T;
  Error: null;
};

type Failure<E> = {
  Data: null;
  Error: E;
};

 type Result<T, E = Error> = Success<T> | Failure<E>;

// Main wrapper function
export async function TryCatch<T, E = Error>(
  promise: Promise<T>,
): Promise<Result<T, E>> {
  try {
    const Data = await promise;
    return { Data, Error: null };
  } catch (Error) {
    return { Data: null, Error: Error as E };
  }
}
