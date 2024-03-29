import { Component } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  dish!: Dish;
  promotion!: Promotion;
  leader!:Leader;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderservice: LeaderService) { }

  ngOnInit() {
    this.dishservice.getFeaturedDish().then(dish => this.dish = dish);
    this.promotionservice.getFeaturedPromotion().then(FeaturedPromotion => this.promotion = FeaturedPromotion);
    this.leaderservice.getFeaturedLeader().then(FeaturedLeader => this.leader = FeaturedLeader);
  }
}
