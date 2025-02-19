The solution is to ensure that `useParams` is called only within a component directly nested within the route that defines the params.  If you need the parameters in another component, pass them as props.

```javascript
// Correct usage:
function ChildComponent() {
  const params = useParams();
  return (
    <div>
      <h1>ChildComponent</h1>
      <MyComponent id={params.id} />
    </div>
  );
}

function MyComponent({id}) {
  console.log(id); //params.id will be available here
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
```
Alternatively, you can use the `useLocation` hook to get the entire location object and extract the parameters manually, but the preferred method is to structure your components according to the routing hierarchy.