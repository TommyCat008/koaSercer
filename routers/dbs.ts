/*
 * @Author: 汤米猫 
 * @Date: 2019-01-04 09:53:26 
 * @Last Modified by: 汤米猫
 * @Last Modified time: 2019-01-04 17:45:17
 */

const MongoClient = require('mongodb').MongoClient
// const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'cms';

export class DB {
    constructor() {
        console.log('this prototype should not be initialized !');
    }

    static db: any = undefined;

    static async connect() {
        const client = await MongoClient.connect(url, { useNewUrlParser: true });
        const db = client.db(dbName);
        this.db = db;
    }

    static async insert(dbTable: String, data: Object) {
        let collection = this.db.collection(dbTable);
        let jsons = await collection.insertOne(data);
        return jsons;
    }

    static async query(dbTable: String) {
        let collection = this.db.collection(dbTable);
        let jsons = await collection.find({}, { "_id": 0 }).toArray();
        return jsons;
    }

    static async queryCount(dbTable: String) {
        let collection = this.db.collection(dbTable);
        let jsons = await collection.count();
        return jsons;
    }

    static async delete(dbTable: String, data: Object) {
        let collection = this.db.collection(dbTable);
        let jsons = await collection.remove(data);
        return jsons;
    }

    static async update(dbTable: String, updateData: Object, data: Object) {
        let collection = this.db.collection(dbTable);
        let jsons = await collection.update(updateData, data);
        return jsons;
    }
}