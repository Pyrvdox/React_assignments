import React, { useEffect, useState } from "react";

const BookInfo = ({ isbn }) => {
    const [isbnData, setIsbnData] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
            const bookInformation = await response.json();
            setIsbnData(bookInformation);
            
        };
        fetchData();
    }, []);

    return (
        <>
            <div>
                <h1>{isbn}</h1>
                {isbnData && isbnData.items && isbnData.items.length > 0 && (
                    <h1>{isbnData.items[0].volumeInfo.title}</h1>
                )}
            </div>
        </>
    );
};

export default BookInfo;
