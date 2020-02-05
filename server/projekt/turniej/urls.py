from django.urls import include, path
from rest_framework import routers
from projekt.turniej import views
from rest_framework.authtoken.views import ObtainAuthToken

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'register', views.RegisterViewSet)
router.register(r'tournament', views.TournamentViewSet)
router.register(r'tournamentadd', views.TournamentaddViewSet)
router.register(r'tournamentaddQF', views.TournamentaddQFViewSet)
router.register(r'tournamentaddSF', views.TournamentaddSFViewSet)
router.register(r'tournamentaddF', views.TournamentaddFViewSet)
router.register(r'tournamentaddWinn', views.TournamentaddWinnViewSet)

router.register(r'tournamentaGoalFull', views.TournamentaGoalFullViewSet)
router.register(r'tournamentGoalQF', views.TournamentGoalQFViewSet)
router.register(r'tournamentGoalSF', views.TournamentGoalSFViewSet)
router.register(r'tournamentGoalF', views.TournamentGoalFViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('auth/', ObtainAuthToken.as_view()),
    path('register/', include('rest_framework.urls', namespace='rest_framework')),
    path('tournament/', ObtainAuthToken.as_view()),
    path('tournamentadd/', ObtainAuthToken.as_view()),
    path('tournamentaddQF/', ObtainAuthToken.as_view()),
    path('tournamentaddSF/', ObtainAuthToken.as_view()),
    path('tournamentaddF/', ObtainAuthToken.as_view()),
    path('tournamentaddWinn/', ObtainAuthToken.as_view()),

    #goal
    path('tournamentaGoalFull/', ObtainAuthToken.as_view()),
    path('tournamentGoalQF/', ObtainAuthToken.as_view()),
    path('tournamentGoalSF/', ObtainAuthToken.as_view()),
    path('tournamentGoalF/', ObtainAuthToken.as_view()),

    #path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]