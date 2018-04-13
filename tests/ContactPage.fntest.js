import { Selector } from 'testcafe';

fixture('Contact Page').page('http://localhost:3000/contact');

test('Contact page test', async t => {
    const beforeCount = Selector('.home div').count;

    await t.expect(beforeCount).eql(5);

    await t.click('#button');

    const afterCount = await Selector('.home div').count;

    await t.expect(beforeCount).eql(6);
});