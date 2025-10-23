import ContextsProvider from "./ContextsProvider"
import RoutesProvider from "./RoutesProvider"

export default function AppProvider() {
  return (
    <ContextsProvider>
        <RoutesProvider></RoutesProvider>
    </ContextsProvider>
  )
}
