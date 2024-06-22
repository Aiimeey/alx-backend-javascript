export default function ploadPhoto(filename) {
  return Promise
    .reject(Error(`${filename} cannot be processed`));
}
