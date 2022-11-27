import React from 'react';
import useTitle from '../../Hooks/Usetitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <div>
            <h1 className="text-4xl text-center text-amber-600 font-bold py-5">My Blogs</h1>
            <hr className='pb-5' />
            <div className='p-5 '>
                <div className="collapse">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <h1 className="text-2xl">
                            1. What are the different ways to manage a state in a React application?
                        </h1>
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p>React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself. React state management is basically half of a React app. <br />
                            The Four Kinds of React State to Manage
                            When we talk about state in our applications, it’s important to be clear about what types of state actually matter.<br />

                            There are four main types of state you need to properly manage in your React apps:<br />

                            1. Local state<br />
                            2. Global state<br />
                            3. Server state<br />
                            4. URL state
                        </p>
                    </div>
                </div>
                <div className="collapse">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <h1 className="text-2xl">
                            2. How does prototypical inheritance work?
                        </h1>
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                    </div>
                </div>
                <div className="collapse">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <h1 className="text-2xl">
                            3. What is a unit test? Why should we write unit tests?
                        </h1>
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                    </div>
                </div>
                <div className="collapse">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <h1 className="text-2xl">
                            3. What is the difference in React, Angular and Vue?
                        </h1>
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p>
                            Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. <br />
                            Angular is better than React if your application is enterprise-grade and you need to incorporate complex functionalities like progressive, single-page, and native web apps. However, React specializes in creating UI components and can be used in any application, including single-page apps. <br />
                            React. js is the best choice if you are developing a single-page website. But if you are building a complex project, you should go for Angular. Because of Angular's massive number of constructed functions and React's smaller package size, the former has a steeper learning curve.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;