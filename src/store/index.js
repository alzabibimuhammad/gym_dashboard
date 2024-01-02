// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
import chat from 'src/store/apps/chat'
import user from 'src/store/apps/user'
import email from 'src/store/apps/email'
import invoice from 'src/store/apps/invoice'
import calendar from 'src/store/apps/calendar'
import permissions from 'src/store/apps/permissions'
import CoachStore from 'src/pages/coach/store'
import PlayerStore from 'src/pages/players/store'
import ReportStore from 'src/pages/report/store'
import Dashboard from 'src/pages/dashboard/store'
import SubscriptionsStore from 'src/pages/subscriptions/store'

export const store = configureStore({
  reducer: {
    user,
    chat,
    email,
    invoice,
    calendar,
    permissions,

    PlayerStore,
    CoachStore,
    ReportStore,
    Dashboard,
    SubscriptionsStore
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
