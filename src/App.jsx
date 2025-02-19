import RouterComp from './router/Router'
import { DocumentationsProvider } from './context/DocumentationsContext'
import { PaymentsProvider } from './context/PaymentsContext'
import { ContentProvider } from './context/ContentContext'

function App() {
  return (
    <DocumentationsProvider>
      <PaymentsProvider>
        <ContentProvider>
          <RouterComp/>
        </ContentProvider>
      </PaymentsProvider>
    </DocumentationsProvider>
  )
}

export default App
