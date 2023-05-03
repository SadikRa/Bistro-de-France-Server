import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Blog = () => {

    const {loading} = useContext(AuthContext)
  
    if (loading){
    return  <> loading...  <progress className="progress w-56"></progress></>
    }

  return (
    <div>
      <h1 className="text-3xl my-5">
        Question: Tell us the differences between uncontrolled and controlled
        components.
      </h1>
      <p className="mb-8">
        Answer: Controlled components refer to components that have their state
        and behavior controlled by the parent component. These components rely
        on props passed down from the parent component to update their state and
        behavior. Uncontrolled components refer to components that manage their
        own state internally.
      </p>

      <h1 className="text-3xl my-5">
        Question: How to validate React props using PropTypes?
      </h1>
      <p className="mb-8">
        Answer: Prop Types is used for props validation. If some of the props
        aren't using the correct type that we assigned, we will get a console
        warning. After we specify validation patterns, we will set App.
        defaultProps. <br />
        <span className="text-2xl">React PropTypes validators</span>
        1.any : The prop can be of any data type. <br />
        2.bool : The prop should be a Boolean. <br />
        3.number : The prop should be a number. <br />
        4.tring : The prop should be a string. <br />
        5.func : The prop should be a function. <br />
        6.array : The prop should be an array. <br />
        7.object : The prop should be an object. <br />
      </p>

      <h1 className="text-3xl my-5">
        Question: Tell us the difference between nodejs and express js ?
      </h1>
      <p className="mb-8">
        Answer: NodeJS is the package, which provides the JavaScript run-time
        environment, whereas Express is a framework that sits on top of NodeJS
        and helps us to handle requests and responses
      </p>

      <h1 className="text-3xl my-5">
        Question: What is a custom hook, and why will you create a custom hook?
      </h1>
      <p className="mb-8">
        Answer: Custom React JS hooks offer reusability as when a custom hook is
        created, it can be reused easily, which makes the code cleaner and
        reduces the time to write the code. It also enhances the rendering speed
        of the code as a custom hook does not need to be rendered again and
        again while rendering the whole code
      </p>
    </div>
  );
};

export default Blog;
