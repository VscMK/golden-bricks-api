'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Roles', {
            role_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            }
        });

        await queryInterface.createTable('Teams', {
            team_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            manager_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            apiary_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            }
        });

        await queryInterface.createTable('Users', {
            user_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            first_name: {
                type: Sequelize.STRING
            },
            last_name: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            hashed_password: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            role_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            team_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            }
        });

        await queryInterface.createTable('Apiary', {
            apiary_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            qr: {
                type: Sequelize.STRING,
                allowNull: false
            },
            location_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            longitude: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            no_colonies: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            fence: {
                type: Sequelize.CHAR(1),
            },
            electricity: {
                type: Sequelize.CHAR(1),
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });

        await queryInterface.createTable('Gondolas', {
            gondola_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            apiary_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                onDelete: 'CASCADE',
            },
            qr: {
                type: Sequelize.BIGINT,
                allowNull: false
            },
            no_colonies: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });

        await queryInterface.createTable('Colonies', {
            colony_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            apiary_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                onDelete: 'CASCADE',

            },
            gondola_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                onDelete: 'CASCADE',

            },
            qr: {
                type: Sequelize.BIGINT,
                allowNull: false
            },
            no_boxes: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            queen_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            queen_alarm: {
                type: Sequelize.CHAR(1),
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });

        await queryInterface.createTable('Queen', {
            queen_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            apiary_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            gondola_colony_id: {
                type: Sequelize.INTEGER,
                allowNull: false,

            },
            color_plate: {
                type: Sequelize.STRING,
                allowNull: false
            },
            queen_number: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            queen_id: {
                type: Sequelize.STRING,
                allowNull: false
            },
            clipped: {
                type: Sequelize.CHAR(1),
                allowNull: false,
            },
            mating_status: {
                type: Sequelize.CHAR(1),
                allowNull: false,
            },
            marked: {
                type: Sequelize.CHAR(1),
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });

        await queryInterface.addConstraint('Users', {
            fields: ['role_id'],
            type: 'foreign key',
            name: 'role_association',
            references: {
                table: 'Roles',
                field: 'role_id'
            }
        });

        await queryInterface.addConstraint('Teams', {
            fields: ['manager_id'],
            type: 'foreign key',
            name: 'users_association',
            references: {
                table: 'Users',
                field: 'user_id'
            }
        });

        await queryInterface.addConstraint('Teams', {
            fields: ['apiary_id'],
            type: 'foreign key',
            name: 'apiary_association',
            references: {
                table: 'Apiary',
                field: 'apiary_id'
            },
        });

        await queryInterface.addConstraint('Gondolas', {
            fields: ['apiary_id'],
            type: 'foreign key',
            name: 'apiary_association',
            references: {
                table: 'Apiary',
                field: 'apiary_id',
            },
            onDelete: 'CASCADE',
        });

        await queryInterface.addConstraint('Colonies', {
            fields: ['apiary_id'],
            type: 'foreign key',
            name: 'apiary_association',
            references: {
                table: 'Apiary',
                field: 'apiary_id',
            },
            onDelete: 'CASCADE',
        });

        await queryInterface.addConstraint('Colonies', {
            fields: ['gondola_id'],
            type: 'foreign key',
            name: 'gondola_association',
            references: {
                table: 'Gondolas',
                field: 'gondola_id',
            },
            onDelete: 'CASCADE',
        });

    },


    async down(queryInterface, Sequelize) {
        await queryInterface.dropAllTables();
    }
};