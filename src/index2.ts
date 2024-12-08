// =======1=======
interface IDatabase {
  connect(): string;
  disconnect(): string;
  create(data: object): string;
  read(): object;
  update(index: number, data: object): string;
  delete(index: number): string;
}

class Database implements IDatabase {
  connect(): string {
    return "Connected";
  }
  disconnect(): string {
    return "Disconnected";
  }
  create(data: object): string {
    return "";
  }
  read(): object {
    return {};
  }
  update(index: number, data: object): string {
    return "";
  }
  delete(index: number): string {
    return "";
  }
}

// =======2=======
class MongoDB extends Database {
  connect(): string {
    return "Connected";
  }
  disconnect(): string {
    return "Disconnected";
  }
  create(data: object): string {
    return "";
  }
  read(): object {
    return {};
  }
  update(index: number, data: object): string {
    return "";
  }
  delete(index: number): string {
    return "";
  }
}

// =======3=======
class SQLDB extends Database {
  connect(): string {
    return "Connected";
  }
  disconnect(): string {
    return "Disconnected";
  }
  create(data: object): string {
    return "";
  }
  read(): object {
    return {};
  }
  update(index: number, data: object): string {
    return "";
  }
  delete(index: number): string {
    return "";
  }
}

// Task : MongoDB class

// Examples of using the classes
const mongoDb = new MongoDB();
mongoDb.connect();
mongoDb.create({ name: "Ali", age: 30 });
console.log(mongoDb.read());
mongoDb.update(0, { name: "Vali", age: 25 });
console.log(mongoDb.read());
mongoDb.delete(0);
console.log(mongoDb.read());
mongoDb.disconnect();

const sqlDb = new SQLDB();
sqlDb.connect();
sqlDb.create({ name: "Hasan", age: 40 });
console.log(sqlDb.read());
sqlDb.update(0, { name: "Husan", age: 35 });
console.log(sqlDb.read());
sqlDb.delete(0);
console.log(sqlDb.read());
sqlDb.disconnect();
