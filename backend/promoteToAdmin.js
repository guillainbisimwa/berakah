const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://localhost:27018/berakah');
  console.log('Connected to DB');
  
  const db = mongoose.connection;
  const result = await db.collection('users').updateOne(
    { email: 'admin@berakah.com' },
    { $set: { role: 'admin' } }
  );
  
  console.log('Update result:', result);
  mongoose.disconnect();
}

main().catch(console.error);
