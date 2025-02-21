import Book from "../model/book.model.js";

const getBook = async (req,res)=>{
    try {
        let book = await Book.find()
        res.status(200).json(book)
    } catch (error) {
        
    }
}

export {getBook}