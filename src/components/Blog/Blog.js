import React from 'react';

const Blog = () => {
    return (
        <div className="md:px-20 px-7 my-8">
            <div className="my-5 rounded shadow-lg p-4">
                <h2 className='text-3xl font-bold my-4'>What is the puspose of react router?</h2>
                <hr />
                <p className='text-2xl mb-2'>React Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
                <p className='text-2xl mb-2'>React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. </p>
            </div>

            <div className="my-5 rounded shadow-lg p-4">
                <h2 className='text-3xl font-bold my-4'>How does context api work?</h2>
                <hr />
                <p className='text-2xl mb-2'>React context, a core React API provides an easier interface for developers to share data or pass props down multiple levels deep in our React applications. From the React docs, with react context, we can easily pass data down to the very component that needs it at any level in the component tree, without having to explicitly pass this data down each component level in the tree. This is all there is to React context. </p>

                <p className='text-2xl mb-2'>React context works by exposing a ´context object´. As shown below, we declare a context object with a default value:</p>

                <p className='text-2xl mb-2'>const MyContext = React.createContext(defaultValue)</p>

                <p className='text-2xl mb-2'>This context object, `MyContext` has a `Provider` component that allows as many other components as possible below it who need access to context object changes, subscribe to it. This means that context changes can be subscribed to on the component hierarchy by consuming components who must be children of Provider components. The signature of a Provider component is shown below:</p>

                <p className='text-2xl mb-2'>  MyContext.Provider value = data </p>
            </div>

            <div className="my-5 rounded shadow-lg p-4">
                <h2 className='text-3xl font-bold my-4'>The UseRef Hook in React Js.</h2>
                <hr />
                <p className='text-2xl mb-2'>The useRef hook is a built-in React hook that takes one argument or parameter as its initial value and returns a reference. The reference has an interesting and useful property called current.</p>

                <p className='text-2xl mb-2'>One of the most useful features of the useRef hook is that the data or value in a reference or ref remains the same, even after component re-rendering. Also, if you update a reference, it does not affect the rendering of the app, unlike states.
                </p>

            </div>
        </div>
    );
};

export default Blog;