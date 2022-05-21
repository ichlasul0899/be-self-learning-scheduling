exports.seed = async function(knex) {
  await knex('activities').del()
  await knex('users').del()
  await knex('methods').del()

  await knex('users').insert([
    { id: 1, username: 'Alice', password: "$2a$09$7Zm9oOEwF9XqxrOMhOAiTup5mlS7FOZMOOanw4h6EbSCZaRi2T.W6"}
  ])
  await knex('methods').insert([
    {id: 1, methode_title: 'Workshop / Self Learning'},
    {id: 2, methode_title: 'Sharing Practice / Proffesional Talks'},
    {id: 3, methode_title: 'Discussion Room'},
    {id: 4, methode_title: 'Coaching'},
    {id: 5, methode_title: 'Mentoring'},
    {id: 6, methode_title: 'Job Assignment'}
  ]);
  await knex('activities').insert([
    {id: 1, method: 1, user: 1, title: 'Fundaental of superintendence', start_date: '2022-06-01', end_date: '2022-06-15' },
  ]);
};
