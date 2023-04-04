# Generated by Django 4.1.7 on 2023-04-04 20:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ads', '0002_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='ad',
            old_name='petrol_type',
            new_name='color',
        ),
        migrations.RemoveField(
            model_name='ad',
            name='car',
        ),
        migrations.AddField(
            model_name='ad',
            name='cylinder',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='ad',
            name='feul_type',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='ad',
            name='make',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='ad',
            name='trim',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
