import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly whyWeExist = [
    {
      title: 'Cut through the noise.',
      body: 'The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.',
    },
    {
      title: 'Empower home kitchens.',
      body: 'When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep.',
    },
    {
      title: 'Make healthy look good.',
      body: 'High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters.',
    },
  ];

  readonly foodPhilosophy = [
    {
      title: 'Whole ingredients first.',
      body: 'Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.',
    },
    {
      title: 'Flavor without compromise.',
      body: 'Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.',
    },
    {
      title: 'Respect for time.',
      body: 'Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful.',
    },
    {
      title: 'Sustainable choices.',
      body: 'Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.',
    },
  ];

  readonly beyondThePlate = [
    'Encourage family dinners and social cooking.',
    'Reduce reliance on single-use packaging and delivery waste.',
    'Spark curiosity about seasonal produce and local agriculture.',
  ];
}
