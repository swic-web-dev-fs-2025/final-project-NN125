# Nick Nolden

## Final Reflection

### Implementation

#### State Management

A good chunk of fancy bits of the app are located within `use-button-state.jsx`. This is where the initial states (and `localStorage` usage) are initialized. In addition, functions that change or utilize any part of the state of the app are located within this file. `useLocalStorage` is a custom React state management function that also integrates with `localStorage`. This function is provided by [useHooks](https://usehooks.com/uselocalstorage). I use this for a couple of things in the app, with the most important being the `buttonStates`. This is where the 64 buttons' (the number being provided by `BUTTON_COUNT`) states are initialized dynamically with `Array().fill` with a starting color of `bg-white`.

Every utilization of color in this app is through [Tailwind CSS](https://tailwindcss.com/) classes. From the button state initialization, how we change the colors, and how the app itself is visually rendered. Originally I planned on allowing users to utilize custom hex color codes, but my professor suggested simplifying the app by using Tailwind's colors, which is a smart decision, since all we need to worry about is how the classes are being applied.

Speaking of colors, how do we change them? We begin with `colorState`, which keeps track of the current color selected by the user. Whenever the user clicks on one of the color swatches on the page, it calls `setCurrentColor`, which takes the color of the swatch they clicked as a parameter, and calls `setColorState` to change the current color. Located at the bottom of the swatches is message that tells the user what their current color is. This utilizes a `const` called `colorDisplay`, which takes the `colorState`, removes the `bg` and `-500` with [`.replace`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace), and capitalizes every letter with [`.toUpperCase`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase):

```jsx
// takes the colorState and formats it for display
const colorDisplay = colorState
  .replace("bg-", "")
  .replace("-500", "")
  .toUpperCase();
```

This way the user knows exactly what color is currently selected, even when they click away from the swatches. When the user clicks on a button in the field, it calls `handleFieldButtonClick`, which takes a shallow copy of the current state, and modifies the button that was clicked with the current `colorState`. If a user wants to fill the whole field with their color, they can click a fill button located beneath the current color message that calls `handleFillButtonClick`, which creates a brand new array with the current `colorState`. This, in essence, can also act a reset button of sorts, since you're filling entire field with your selected color.

In addition to the buttons, we also keep track of the form that is located at the bottom of the page. We keep track of the `submittedData` and the `message`. There is also `savedData`, which is the same as `submittedData` but with `useLocalStorage` instead of `useState`. `savedData` is used to display what the user inputted to the forms in the form of their creation's title, the person's name, and a short description of it. Why do that instead of making `submittedData` utilize `localStorage` instead? Well, if we did that, the Form Submitted message that appears after you click the Submit button will stay around when you reload the page. Having a separate `savedData` state prevents this from occurring.

People who know how to use the dev console can work around the submit button when it is disabled still and submit data we don't want. This is where `handleSubmit` comes into play. There is an `if` statement at the start that checks the message length to see if it is over 100. If it isn't, the function continues on as normal, which is to save the form data to `submittedData` and `savedData`, and set the message back to blank. If the message length is over 100, then it will do nothing.

There is one final form related function in `use-button-state.jsx`, and it is called `handleFormReset`, which clears out the form and message box. Nothing more, nothing less.

At the end of the file is a `return` statement, which returns only the things the app needs to function:

```jsx
return {
  BUTTON_COUNT,
  buttonStates,
  handleFieldButtonClick,
  handleFillButtonClick,
  setCurrentColor,
  colorDisplay,
  handleSubmit,
  submittedData,
  handleFormReset,
  message,
  setMessage,
  savedData,
};
```

We then import the hook into the `app.jsx`, and utilize its contents, like this:

```jsx
import useButtonState from "./hooks/use-button-state.jsx";

export default function app() {
  const {
    BUTTON_COUNT,
    colorDisplay,
    buttonStates,
    handleFieldButtonClick,
    handleFillButtonClick,
    setCurrentColor,
    handleSubmit,
    submittedData,
    handleFormReset,
    message,
    setMessage,
    savedData,
  } = useButtonState();
```

#### Components

This app utilizes two simple, but essential, custom components: `Button` and `Input`. Both return html code related to the names of these components: `<button>` for Button, and `<input>` for Input. However, where they differ are their parameters.

Button takes the following parameters:

```jsx
onClick,
id,
disabled,
type = "button",
color = "bg-white",
className = `btnField ${color}`,
text,
```

`onClick`, `id`, `disabled`, and `text` don't have default settings attached to them, since they will have some kind of unique thing that will be attached once they are called, or none at all. `onClick` is a React prop that runs code when click on a button. `id` is used to internally identify buttons. In our case, we use them to help dynamically display them:

```jsx
// dynamically create an array of buttons using Array.from
const BUTTON_FIELD = Array.from({ length: BUTTON_COUNT }, (unused, index) => ({
  id: String(index),
  onClick: () => handleFieldButtonClick(index),
  color: buttonStates[index],
}));

{
  BUTTON_FIELD.map((buttonField) => (
    <Button key={buttonField.id} {...buttonField} />
  ));
}
```

`type`, `color`, and `className` have defaults attached. `type` is almost always be `"button"`, and the `color` and `className` assumes the button will be used for the button field. These parameters can easily be changed when they are called upon. The submit button under the form for example changes the `type` from `"button"` to `"submit"`. The `className` is also modified to create a unique look for the submit button. There is also a ternary statement included in it to change when the message box goes over 100, changing the cursor and opacity. `disabled` is also taken advantage of here to prevent the button from being clicked.

As for Input, it takes these as its parameters:

```jsx
label,
name,
type = "text",
required = true,
rows = 4,
value,
onChange,
```

`label` is what the user sees on top of the text box, which tells you what the box is for. `name` is like `id`, in that it is an internal identifier for whenever you need it, which in our case it is to dynamically display our inputs, like we do with the button field:

```jsx
const FORM_FIELDS = [
{ label: "What is your artwork's Title?", name: "title", type: "text" },
{ label: "What is your Name?", name: "name", type: "text" },
{
    label: "Describe your Piece:",
    name: "message",
    type: "textarea",
    value: message ?? "",
    onChange: (e) => setMessage(e.target.value),
},

{/* Map the fields array to Input components */}
{FORM_FIELDS.map((field) => (
    <Input key={field.name} {...field} />
))}
```

`type` has a default of `"text"` since it is a safe setting to have, and also `type` is need to see or do anything with the input. `required` has a default of `true` since all of our inputs need to be filled in before it can be submitted. The web browser will tell you if a field is blank. Though in the case of the message box, I had to handle a special case (ie if the message goes over 100 characters) by controlling that part of the form. Otherwise, it was an uncontrolled form. `value` is what we're using for the message, as that is a controlled part of the form. We fill it in with `message ?? ""` to tell React that we are controlling this. `onChange` is a prop we call in React to run code whenever the text box contents are being changed. In our case, the message keeps getting set in order to keep track of how many characters there are.

Both Button and Input are important custom components because they help with the repetition, and to keep the app code a little more tidy.

### Challenges

Implementing a visual indication of what color the user had selected at that moment was a massive headache. At first I wanted the selected color to stay in focus, even after the user clicks away. So I utilized Copilot a few times to see if it could generate something, with a prompt of "keep the button that was clicked on in this div in focus when clicked away". Each one was incredibly overly complicated. Before realizing I should use the `id` for the button rendering, I added them in to make whatever Copilot was suggesting a lot less difficult, but no dice. I ended up going with what I have now, a status message inside of a `<p>` tag that utilizes `colorDisplay`:

```jsx
<div className="p-2">
  <p className="font-bold">Selected Color: {colorDisplay}</p>
</div>
```

Would it have been better to also keep the selected color in focus? Yes, of course, but at least the user now knows exactly what color they're using now.

Another challenge I alluded to earlier was the Form Submitted staying on site reloaded. I mentioned I fixed it by creating `savedData`, but I never talked about how I got there. At first I got rid of that success message completely, but I realized it would be better for the user to know that what they submitted was, in fact, submitted. This is why I went with that solution. I did try to add something to make the message disappear after a few seconds, but every Copilot suggestion was overly complicated, or worse, modify some other part of the code I didn't want it too. The prompt I gave it was to "make the Form Submitted message disappear after 5 seconds". Since I felt like the message staying wouldn't hurt anything, I didn't bother with it any further. If the user is bothered by it, they can reload the website.

### AI Use

As mentioned in the Challenges section, Copilot was used in the making of the app. It was primarily used to fix whatever small issue that gets detected by the linter. Its autocomplete feature came in clutch when writing out each of the field and color swatch buttons. It sped things up quite a bit. Though for the button field, originally they were hand written for each button. I told Copilot to write out the rest of them ("fill in the rest of the state up to 64 buttons"), but it ended up giving me the `Array.from()`. I ended up really liking how tidy it made the app code look so I decided to keep it. I did change the names that was provided originally (`_` and `i` to `unused` and `index`) so I could more easily know what's going on at a glance. The autocomplete wasn't always helpful though. When writing out the new colors, it would give me colors I didn't want, so i would have to go in and change them. Luckily it would pick up the change and bring up suggestions to change the other parts to match. It also occasionally messed up the code in a subtle way to cause more errors to appear. Like mentioned in Challenges, trying to let Copilot generate some code for me ended up being a crapshoot, except for the aforementioned `Array.from()`, and some of the autocompletes.

### Lessons Learned

I learned while working on this app that maybe I'm overly ambitious at some points. I did reel it back when I was getting close to done to make it as simple as possible, but I did want to add some more things to the app. I wanted to allow the button field, along with the title, name of the person, and description to be screenshotted and saved to an image the person can download to their computer. I did find a custom React component that does just that called [`use-react-screenshot`](https://www.npmjs.com/package/use-react-screenshot), but since it made use of `useRef`, something I don't remember if we talked about in class or not, and how somewhat intimidating the setup would be, I decided to not implement it.

While I also know about this lesson since I've been using it throughout the whole semester, working on this project continued to hammer down how unruly AI can be, considering all the annoyances I ran into. It is a useful and powerful tool, but like most other tools, you can't, and shouldn't, always rely on it. It's also a good idea to go back and clean up any AI generated code to make it either less complicated, or to have it make more sense.

One more lesson that I've learned a long time ago, but it applies very well to this project: Reuse old code if you can. This will help speed up the development process a ton. It's also helpful for some things you might still find confusing, like controlled forms. I understand how they work, but getting them implemented can be a little bit of a hassle. Reusing the partially controlled form from the uncontrolled form modification helped me with getting through the pain of it pretty quickly.

### Final Thoughts

This project, while stressful to put together, was also very fun. I feel like if I had a different professor teaching this, I would've likely not retained the information learned, like with some of my other classes. So I would like to extend a big thank you to my professor for being really good at his job, and for teaching both this class and 177. I also want to thank him for his help during the project, both for suggesting things to simplify the project, and what I could with the form instead.
