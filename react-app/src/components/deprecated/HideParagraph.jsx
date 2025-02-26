import { useState } from "react";

function HideParagraph() {

    // State to hold if the paragraph is visible or not
    const [isParagraphVisible, setIsParagraphVisible] = useState(true);

    const toggleStatus = () => {
        setIsParagraphVisible(!isParagraphVisible);
    };

    return (
        <>
            <h1>Change UI based on Click</h1> 
            {isParagraphVisible && (
                <p> This paragraph will be showm/hidden on click. </p>
            )}
            <button onClick={toggleStatus}>
                {isParagraphVisible ? 'Hide' : 'Show'} Paragraph
            </button>
        </>
    );
}

export default HideParagraph;