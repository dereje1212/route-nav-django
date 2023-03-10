# Generated by Django 3.0.3 on 2022-12-29 23:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Efname', models.CharField(max_length=10)),
                ('Elname', models.CharField(max_length=10)),
                ('Esalary', models.CharField(max_length=20)),
                ('EphonNo', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Teacher',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Tfname', models.CharField(max_length=10)),
                ('Tlname', models.CharField(max_length=10)),
                ('Tsalary', models.CharField(max_length=2)),
            ],
        ),
        migrations.AlterField(
            model_name='student',
            name='stugrade',
            field=models.CharField(max_length=2),
        ),
    ]
