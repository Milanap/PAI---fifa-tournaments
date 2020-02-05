from django.db import models
from django.contrib.postgres.fields import ArrayField
from rest_framework.fields import ListField

# Create your models here.


class Tournament(models.Model):
    name = models.CharField(max_length=255)
    nameplay = models.CharField(max_length=255, default="")
    maxPlayer = models.IntegerField(default=0)
    playerrount = ArrayField(models.CharField(max_length=200,), blank=True, size=16, default=list,)
    maxPlayerQF = models.IntegerField(default=0)
    quarterfinal = ArrayField(models.CharField(max_length=200), blank=True, size=8, default=list)
    maxPlayerSF = models.IntegerField(default=0)
    semifinal = ArrayField(models.CharField(max_length=200), blank=True, size=4, default=list)
    maxPlayerF = models.IntegerField(default=0)
    final = ArrayField(models.CharField(max_length=200), blank=True, size=2, default=list)

    maxGoalPlay = models.IntegerField(default=0)
    playerrountgoal = ArrayField(models.IntegerField(), blank=True, size=16, default=list)

    maxGoalPlayQF = models.IntegerField(default=0)
    quarterfinalgoal = ArrayField(models.IntegerField(), blank=True, size=8, default=list)

    maxGoalPlaySF = models.IntegerField(default=0)
    semifinalgoal = ArrayField(models.IntegerField(), blank=True, size=4, default=list)

    maxGoalPlayF = models.IntegerField(default=0)
    finalgoal = ArrayField(models.IntegerField(), blank=True, size=2, default=list)



    maxPlayerW = models.IntegerField(default=0)
    winner = ArrayField(models.CharField(max_length=200), blank=True, size=1, default=list)

class Tournamentadd(models.Model):
    name = models.CharField(max_length=255)
    maxPlayer = models.IntegerField()
    playerrount = ArrayField(models.CharField(max_length=200, ), blank=True, size=16, default=list, )
    playerrount1 = ArrayField(models.CharField(max_length=200, ), blank=True, size=16, default=list, )

class StringArrayField(ListField):
    def to_internal_value(self, data):
        data = data.split(",")  # convert string to list
        return super().to_internal_value(self, data)

    def to_representation(self, obj):
        obj = super().to_representation(obj)
        return ",".join([str(element) for element in obj])




