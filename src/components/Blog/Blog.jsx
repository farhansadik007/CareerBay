import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog'>
            <h2>When should you use context API?</h2>
            <p>Answer: Context API is needed when some data is needed to be accessible by many components at different nesting levels.</p>
            <h2>What is a custom hook?</h2>
            <p>Answer: Custom hook is a special kind of function starts with 'use' and call other hooks.</p>
            <h2>What is useRef?</h2>
            <p>Answer: useRef is a react hook that can be used to store a mutable value that does not cause a re-render when updated.</p>
            <h2>What is useMemo?</h2>
            <p>Answer: useMemo is a react hook that returns a memorized value. It is used to improve performance.</p>
        </div>
    );
};

export default Blog;