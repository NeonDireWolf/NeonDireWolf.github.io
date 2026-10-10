# Example Python Code to Insert a Document
# Joshua Tippitt
# CS 340 Project One

from pymongo import MongoClient 
from pymongo.errors import PyMongoError

class AnimalShelter(object): 
    # CRUD operations for Animal collection in MongoDB 

    def __init__(self, username, password, host='localhost', port=27017): 
        # Initializing the MongoClient. This helps to access the MongoDB 
        # databases and collections. This is hard-wired to use the aac 
        # database, the animals collection, and the aac user. 
        # 
        # You must edit the password below for your environment. 
        # 
        # Connection Variables 
        #  
        DB = 'aac' 
        COL = 'animals' 
        # 
        # Initialize Connection 
        # 
        try:
            self.client = MongoClient(f"mongodb://{username}:{password}@{host}:{port}/?authSource=admin") 
            self.database = self.client[DB] 
            self.collection = self.database[COL] 
        except PyMongoError as e:
            print(f"MongoDB connection error: {e}")
            self.client = None
            self.database = None
            self.collection = None
            
    # Create a method to return the next available record number for use in the create method
            
    # Complete this create method to implement the C in CRUD. 
    def create(self, data):
        #Inserts a document into the collection. It will return true is successful or false if it isn't. 
        if data is None or not isinstance(data, dict): 
            return False  # data should be dictionary             
        
        try: 
            result = self.collection.insert_one(data)
            return result.acknowledged
        except PyMongoError as e:
            print(f"Insert failed: {e}")
            return False

    # Create method to implement the R in CRUD.
    def read(self, query, projection = None):
        # The queries documents using find() return a list of matching documents or an empty list
        if query is None or not isinstance(query, dict):
            return []
        
        try:
            if projection is not None and isinstance(projection, dict):
                cursor = self.collection.find(query, projection)
            else:
                cursor = self.collection.find(query)
                
            return list(cursor)
        
        except PyMongoError as e:
            print(f"Read failed: {e}")
            return [] 
                                      
    # Update
    def update(self, query, update_data):
        # Updates the documents and will return the number of documents changed
        if not isinstance(query, dict) or not isinstance(update_data, dict):
            return 0
                                      
        try:
            result = self.collection.update_many(query, update_data)
            return result.modified_count
        except PyMongoError as e:
            print(f"Update failed: {e}")
            return 0
                                      
    # Delete
    def delete(self, query):
        # Deletes documents and returns the amount deleted
        if not isinstance(query, dict):
            return 0
        
        try:
            result = self.collection.delete_many(query)
            return result.deleted_count
        except PyMongoError as e:
            print(f"Delete failed: {e}")
            return 0
        
            