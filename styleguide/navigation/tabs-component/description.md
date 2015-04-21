###Make navs used as navigation accessible
If you are using navs to provide a navigation bar, be sure to add a `role="navigation"` to the most logical parent
 container of the `<ul>`, or wrap a `<nav>` element around the whole navigation. 
 
 Do not add the role to the `<ul>` 
 itself, as this would prevent it from being announced as an actual list by assistive technologies.