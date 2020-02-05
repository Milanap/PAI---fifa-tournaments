from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Tournament,StringArrayField,Tournamentadd


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class RegisterSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        register = User.objects.create_user(**validated_data)
        return register


class TournamentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tournament
        fields = ['id', 'name', 'nameplay', 'playerrount','quarterfinal','semifinal','final','winner','playerrountgoal','quarterfinalgoal','semifinalgoal','finalgoal','maxPlayer','maxPlayerQF','maxPlayerSF','maxPlayerF','maxPlayerW', 'maxGoalPlay','maxGoalPlayQF','maxGoalPlaySF','maxGoalPlayF']

class PlayTournamentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tournament
        fields = ['id', 'name', 'nameplay', 'maxPlayer','playerrount']

class TournamentaddSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tournament
        fields = ['id', 'name', 'maxPlayer','playerrount']
    def update(self, instance, validated_data):
        print(validated_data)
        if instance.maxPlayer < 16:
            instance.playerrount += validated_data.get('playerrount', instance.playerrount)
            instance.maxPlayer = instance.maxPlayer+1
        print(instance.playerrount)
        instance.save()
        return instance


class TournamentaaddQFSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tournament
        fields = ['id', 'name', 'maxPlayerQF','quarterfinal']
    def update(self, instance, validated_data):
        print(validated_data)
        if instance.maxPlayerQF < 8:
            instance.quarterfinal += validated_data.get('quarterfinal', instance.quarterfinal)
            instance.maxPlayerQF = instance.maxPlayerQF+1
            print(instance.quarterfinal)
            print(instance.maxPlayerQF)
        print(instance.quarterfinal)
        instance.save()
        return instance

class TournamentaaddSFSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tournament
        fields = ['id', 'name', 'maxPlayerSF','semifinal']
    def update(self, instance, validated_data):
        print(validated_data)
        if instance.maxPlayerSF < 4:
            instance.semifinal += validated_data.get('semifinal', instance.semifinal)
            instance.maxPlayerSF = instance.maxPlayerSF+1
        print(instance.playerrount)
        instance.save()
        return instance

class TournamentaaddFSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tournament
        fields = ['id', 'name', 'maxPlayerF','final']
    def update(self, instance, validated_data):
        print(validated_data)
        if instance.maxPlayerF < 2:
            instance.final += validated_data.get('final', instance.final)
            instance.maxPlayerF = instance.maxPlayerF+1
        print(instance.playerrount)
        instance.save()
        return instance

class TournamentaWinnSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tournament
        fields = ['id', 'name', 'maxPlayerW','winner']
    def update(self, instance, validated_data):
        print(validated_data)
        if instance.maxPlayerW < 1:
            instance.winner += validated_data.get('winner', instance.winner)
            instance.maxPlayerW = instance.maxPlayerW+1
        print(instance.playerrount)
        instance.save()
        return instance


#goal

class TournamentGoalFullSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tournament
        fields = ['id', 'name', 'maxGoalPlay','playerrountgoal', 'maxPlayerQF','quarterfinal']
    def update(self, instance, validated_data):
        print(validated_data)
        if instance.maxGoalPlay < 16:
            instance.playerrountgoal += validated_data.get('playerrountgoal', instance.playerrountgoal)
            instance.maxGoalPlay = instance.maxGoalPlay+2
            instance.quarterfinal += validated_data.get('quarterfinal', instance.quarterfinal)
            instance.maxPlayerQF = instance.maxPlayerQF + 1
            print(instance.playerrountgoal)
        print(instance.playerrount)
        instance.save()
        return instance

class TournamentGoalQFSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tournament
        fields = ['id', 'name', 'maxGoalPlayQF','quarterfinalgoal', 'maxPlayerSF','semifinal']
    def update(self, instance, validated_data):
        print(validated_data)
        if instance.maxGoalPlayQF < 8:
            instance.quarterfinalgoal += validated_data.get('quarterfinalgoal', instance.quarterfinalgoal)
            instance.maxGoalPlayQF = instance.maxGoalPlayQF+2

            instance.semifinal += validated_data.get('semifinal', instance.semifinal)
            instance.maxPlayerSF = instance.maxPlayerSF + 1
        print(instance.playerrount)
        instance.save()
        return instance

class TournamentGoalSFSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tournament
        fields = ['id', 'name', 'maxGoalPlaySF','semifinalgoal', 'maxPlayerF','final']
    def update(self, instance, validated_data):
        print(validated_data)
        if instance.maxGoalPlaySF < 4:
            instance.semifinalgoal += validated_data.get('semifinalgoal', instance.semifinalgoal)
            instance.maxGoalPlaySF = instance.maxGoalPlaySF+2

            instance.final += validated_data.get('final', instance.final)
            instance.maxPlayerF = instance.maxPlayerF + 1
        print(instance.playerrount)
        instance.save()
        return instance

class TournamentGoalFSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tournament
        fields = ['id', 'name', 'maxGoalPlayF','finalgoal', 'maxPlayerW','winner']
    def update(self, instance, validated_data):
        print(validated_data)
        if instance.maxGoalPlayF < 2:
            instance.finalgoal += validated_data.get('finalgoal', instance.finalgoal)
            instance.maxGoalPlayF = instance.maxGoalPlayF+2
            instance.winner += validated_data.get('winner', instance.winner)
            instance.maxPlayerW = instance.maxPlayerW + 1
        print(instance.playerrount)
        instance.save()
        return instance