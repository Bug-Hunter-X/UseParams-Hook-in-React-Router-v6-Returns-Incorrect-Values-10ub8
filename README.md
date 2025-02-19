# React Router v6 useParams Hook Issue

This repository demonstrates a common issue with the `useParams` hook in React Router v6: incorrect parameter values when used outside the direct scope of a route.

## Problem Description

The `useParams` hook is designed to retrieve URL parameters within the component associated with a route. However, if you use `useParams` in a component that is not directly nested within the route defining the parameters, or in a conditionally rendered component, it can return undefined or incorrect values.

## Solution

The solution involves restructuring the component hierarchy so that `useParams` is used within the component where the route parameters are defined, or lifting state up to provide access to the necessary parameters.