# Generated by Django 3.1.13 on 2021-10-05 06:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20211004_0516'),
    ]

    operations = [
        migrations.AlterField(
            model_name='host',
            name='age',
            field=models.IntegerField(blank=True, default=None, null=True),
        ),
    ]
