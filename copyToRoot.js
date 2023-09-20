import fs from 'fs-extra';

async function copyToRoot() {
  try {
    // Copy the contents of the 'dist' directory to the root directory
    await fs.copy('dist', '.', { overwrite: true });
    console.log('Contents copied to the root directory.');
  } catch (error) {
    console.error('Error copying contents to the root directory:', error);
  }
}

copyToRoot();
