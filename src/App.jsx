import RouterComp from './router/Router'
import { DocumentationsProvider } from './context/DocumentationsContext'
import { PaymentsProvider } from './context/PaymentsContext'
import { ContentProvider } from './context/ContentContext'
import { AuthProvider } from './context/AuthContext'
import { AccountProvider } from './context/AccountContext'

function App() {
  return (
    <AuthProvider>
      <AccountProvider>
        <DocumentationsProvider>
          <PaymentsProvider>
            <ContentProvider>
              <RouterComp/>
            </ContentProvider>
          </PaymentsProvider>
        </DocumentationsProvider>
      </AccountProvider>
    </AuthProvider>
  )
}

export default App
