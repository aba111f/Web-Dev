from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.IntegerField()

    class Meta:
        ordering = ['name']

    def to_json(self):
        return {
            'id':self.id,
            'name':self.name,
            'price':self.price
        }