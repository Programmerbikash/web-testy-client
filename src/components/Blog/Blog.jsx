import React from 'react';

const Blog = () => {
    return (
        <div className='w-5/6 mx-auto mt-20'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-3xl font-medium text-orange-500">
                    <h1>What is the purpose of react router?</h1>
                </div>
                <div className="collapse-content text-emerald-400 font-semibold"> 
                    <p><span className='text-xl font-semibold'>React Router:</span> is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.</p>
                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-3xl font-medium text-orange-500">
                    <h1>How does context api work?</h1>
                </div>
                <div className="collapse-content text-emerald-400 font-semibold"> 
                    <p><span className='text-xl font-semibold'>The React Context API:</span> is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease. React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-3xl font-medium text-orange-500">
                    <h1>When should i use useRef?</h1>
                </div>
                <div className="collapse-content text-emerald-400 font-semibold"> 
                    <p><span className='text-xl font-semibold'>useRef:</span> returns a mutable ref object whose .current property is initialized to the passed argument initialValue. The returned object will persist for the full lifetime of the component. Essentially, useRef is like a ???box??? that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with, React will set its .current property to the corresponding DOM node whenever that node changes. However, useRef is useful for more than the ref attribute. It???s handy for keeping any mutable value around similar to how you???d use instance fields in classes. This works because useRef creates a plain JavaScript object. The only difference between useRef and creating a current: ... object yourself is that useRef will give you the same ref object on every render. Keep in mind that useRef doesn???t notify you when its content changes. Mutating the .current property doesn???t cause a re-render. If you want to run some code when React attaches or detaches a ref to a DOM node, you may want to use a callback ref instead.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;