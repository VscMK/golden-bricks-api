'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'user', [{
                    id: 1,
                    first_name: "user1",
                    last_name: "last_name",
                    email: "user1@test.com",
                    role: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 2,
                    first_name: "user2",
                    last_name: "last_name",
                    email: "user2@test.com",
                    role: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ]
        )
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};