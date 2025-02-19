In React Router Dom v6, using the `useParams` hook inside a component that's not directly nested within a route that defines the params will lead to incorrect or undefined parameter values.  This happens because `useParams` only works within the scope of a route that matches a URL with parameters in its path.  If you try to access params from a component several levels deep, or from a component conditionally rendered, it might not receive the correct context.

```javascript
// Incorrect usage:
function MyComponent() {
  const params = useParams(); // params will be undefined or incorrect here
  console.log(params);
  return <div>MyComponent</div>;
}

function ParentComponent() {
  return (
    <Routes>
      <Route path="/:id" element={<ChildComponent />}>
      </Route>
    </Routes>
  );
}

function ChildComponent() {
  return <MyComponent/>
}
```