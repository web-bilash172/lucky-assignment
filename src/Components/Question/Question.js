import React from 'react';
import './Question.css';
const Question = () => {
    return (
        <div className='question-container'>
            <div>
                <h1>How React Works..?</h1>
                <p>React is a  UI development library,which is javascript based.
                    Usally open-source developers community run it.
                    Although React is a library rather than a language, it is mainly used in web development.Lets talk about how it works.
                    We already known about JSX.In react,we can see some fake html tags.But they are not pure htm.they are JSX.
                    JSX tags have a name, children, and attributes. Numeric values and expressions must be written inside curly brackets.
                    The quotation marks in JSX attributes represent strings, similarly to JavaScript.

                    In most cases, React is written using JSX instead of standard JavaScript to simplify
                    components and keep code clean.
                    A React app usually has a single root DOM node. Rendering an element
                    into the DOM will change the user interface of the page.
                </p>
            </div>
            <div>
                <h1>How useState works..?</h1>
                <p>
                    useState is a hook in react.js. It is used to set a value in the component.
                    The useState hook is a standard hook that ships with React and
                    In the React module,it is declared as a named export.The first argument passed to useState
                    maps to the initial value of the declared state when the component is first rendered
                    , and can be any valid javaScript value. However, if it is called without arguments, then it behaves as though it was
                    called with undefined as the initial state value .This is
                    not something special — it is standard JavaScript behavior for missing parameter values.
                </p>
            </div>
        </div>

    );
};

export default Question;