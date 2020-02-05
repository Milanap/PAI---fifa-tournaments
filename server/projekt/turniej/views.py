from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from projekt.turniej.models import Tournament,Tournamentadd
from projekt.turniej.serializers import UserSerializer, RegisterSerializer, TournamentSerializer ,PlayTournamentSerializer ,TournamentaWinnSerializer
from projekt.turniej.serializers import TournamentaddSerializer ,TournamentaaddQFSerializer,TournamentaaddSFSerializer,TournamentaaddFSerializer
from projekt.turniej.serializers import TournamentGoalFullSerializer , TournamentGoalFSerializer, TournamentGoalQFSerializer, TournamentGoalSFSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.mixins import (
    CreateModelMixin, ListModelMixin, RetrieveModelMixin, UpdateModelMixin
)
from rest_framework.viewsets import GenericViewSet

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsAuthenticated, )


class RegisterViewSet(viewsets.ModelViewSet):
     queryset = User.objects.all().order_by('-date_joined')
     serializer_class = RegisterSerializer
     #authentication_classes = (TokenAuthentication,)

class TournamentViewSet(viewsets.ModelViewSet):
    queryset = Tournament.objects.all()
    serializer_class = TournamentSerializer
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsAuthenticated, )


class TournamentaddViewSet(GenericViewSet, UpdateModelMixin, RetrieveModelMixin):
    queryset = Tournament.objects.all()
    serializer_class = TournamentaddSerializer
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsAuthenticated, )

class TournamentaddQFViewSet(GenericViewSet, UpdateModelMixin, RetrieveModelMixin):
    queryset = Tournament.objects.all()
    serializer_class = TournamentaaddQFSerializer
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsAuthenticated, )

class TournamentaddSFViewSet(GenericViewSet, UpdateModelMixin, RetrieveModelMixin):
    queryset = Tournament.objects.all()
    serializer_class = TournamentaaddSFSerializer
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsAuthenticated, )

class TournamentaddFViewSet(GenericViewSet, UpdateModelMixin, RetrieveModelMixin):
    queryset = Tournament.objects.all()
    serializer_class = TournamentaaddFSerializer
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsAuthenticated, )

class TournamentaddWinnViewSet(GenericViewSet, UpdateModelMixin, RetrieveModelMixin):
    queryset = Tournament.objects.all()
    serializer_class = TournamentaWinnSerializer
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsAuthenticated, )

#Goal Goal

class TournamentaGoalFullViewSet(GenericViewSet, UpdateModelMixin, RetrieveModelMixin):
    queryset = Tournament.objects.all()
    serializer_class = TournamentGoalFullSerializer
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsAuthenticated, )

class TournamentGoalQFViewSet(GenericViewSet, UpdateModelMixin, RetrieveModelMixin):
    queryset = Tournament.objects.all()
    serializer_class = TournamentGoalQFSerializer
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsAuthenticated, )

class TournamentGoalSFViewSet(GenericViewSet, UpdateModelMixin, RetrieveModelMixin):
    queryset = Tournament.objects.all()
    serializer_class = TournamentGoalSFSerializer
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsAuthenticated, )

class TournamentGoalFViewSet(GenericViewSet, UpdateModelMixin, RetrieveModelMixin):
    queryset = Tournament.objects.all()
    serializer_class = TournamentGoalFSerializer
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsAuthenticated, )
