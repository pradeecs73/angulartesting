import { routes } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { VoteComponent } from './vote/vote.component';

describe('routes', () => {

    it('should contain a user route', () => {
          expect(routes).toContain({ path: 'user', component: UserComponent });
      });

      it('should contain a vote route', () => {
        expect(routes).toContain( { path: 'vote', component: VoteComponent });
    });

});