export class FileHelper {
  public static rename(oldName: string): string {
    let fileExtension = oldName.split('.').pop();
    if (fileExtension === oldName) {
      fileExtension = '';
    } else {
      fileExtension = '.' + fileExtension;
    }
    const newName =
      (oldName.includes('.')
        ? oldName.substring(0, oldName.lastIndexOf('.'))
        : oldName) +
      '_' +
      new Date().toJSON().slice(0, 22) +
      fileExtension;
    return newName;
  }
}
