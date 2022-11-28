import React from 'react';

const Blog = () => {
    return (
        <div>
            <div tabIndex={0} className="collapse group">
                <div className="collapse-title  text-white-content group-focus:bg-stone-400 group-focus:text-stone-400-content">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content bg-stone-400  group-focus:bg-stone-400 group-focus:text-stone-400-content">
                    <p> As your application grows, it helps to be more intentional about how your state is organized and how the data flows between your components. Redundant or duplicate state is a common source of bugs. In this chapter, you’ll learn how to structure your state well, how to keep your state update logic maintainable, and how to share state between distant components.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse group">
                <div className="collapse-title  text-white-content group-focus:bg-stone-400 group-focus:text-stone-400-content">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content bg-stone-400  group-focus:bg-stone-400 group-focus:text-stone-400-content">
                    <p>In programming, we often want to take something and extend it. For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse group">
                <div className="collapse-title  text-white-content group-focus:bg-stone-400 group-focus:text-stone-400-content">
                    What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content bg-stone-400  group-focus:bg-stone-400 group-focus:text-stone-400-content">
                    <p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse group">
                <div className="collapse-title  text-white-content group-focus:bg-stone-400 group-focus:text-stone-400-content">
                    Difference between React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content bg-stone-400  group-focus:bg-stone-400 group-focus:text-stone-400-content">
                    <p>When it comes to front-end development, only one language can claim monopoly and that is Javascript. However, the case is not the same with Javascript frameworks, and what makes it even more difficult to choose is that JS has 24 frameworks and over 83 libraries, each having unique and varied functionality. The three most popular JS frameworks are Angular, TezJS, React, and Vue, which have left the others behind by a huge margin. (Strictly speaking, however, React is not a framework, but simply a library.)The intention of this article is to explain the difference between frameworks and libraries, the requirement of frameworks, the varied functionality of the frameworks, and guide you regarding which would suit your business the best.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;