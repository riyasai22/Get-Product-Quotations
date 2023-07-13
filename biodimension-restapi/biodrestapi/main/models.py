from django.db import models


class Quote(models.Model):
    CELL_ORIGIN_CHOICES = [
        ('Keratinocytes', 'Keratinocytes'),
        ('Fibroblasts', 'Fibroblasts'),
        ('Melanocytes', 'Melanocytes'),
        ('Langerhans cells', 'Langerhans cells'),
    ]
    institution = models.CharField(max_length=255)
    vat_number = models.CharField(max_length=255)
    civility = models.CharField(max_length=10)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    cell_origin = models.CharField(max_length=20, choices=CELL_ORIGIN_CHOICES)
    quantity = models.PositiveIntegerField()

    def __str__(self):
        return f'{self.institution} | {self.first_name} | {self.email}'


# class SkinModel(models.Model):
#     CELL_ORIGIN_CHOICES = [
#         ('Keratinocytes', 'Keratinocytes'),
#         ('Fibroblasts', 'Fibroblasts'),
#         ('Melanocytes', 'Melanocytes'),
#         ('Langerhans cells', 'Langerhans cells'),
#     ]
#     quote = models.ForeignKey(
#         Quote, related_name='skin_models', on_delete=models.CASCADE)
#     cell_origin = models.CharField(max_length=20, choices=CELL_ORIGIN_CHOICES)
#     quantity = models.PositiveIntegerField()
